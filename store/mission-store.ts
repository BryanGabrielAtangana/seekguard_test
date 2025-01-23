import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Mission, MissionFilters } from "@/types/mission";

interface MissionState {
  missions: Mission[];
  selectedMission: Mission | null;
  filters: MissionFilters;
  isLoading: boolean;
  error: string | null;
  page: number;
  totalMissions: number;
  limit: number;

  // Actions
  fetchMissions: () => Promise<void>;
  setFilters: (filters: MissionFilters) => void;
  clearFilters: () => void;
  selectMission: (mission: Mission | null) => void;
  setPage: (page: number) => void;
}

const useMissionStore = create<MissionState>()(
  persist(
    (set, get) => ({
      missions: [],
      selectedMission: null,
      filters: {},
      isLoading: false,
      error: null,
      page: 1,
      totalMissions: 0,
      limit: 10,

      // Get missions from API
      fetchMissions: async () => {
        set({ isLoading: true, error: null });

        try {
          const { filters, page, limit } = get();
          const params = new URLSearchParams();

          Object.entries(filters).forEach(([key, value]) => {
            if (value) {
              params.append(
                key,
                Array.isArray(value) ? value.join(",") : value.toString()
              );
            }
          });

          params.append("page", page.toString());
          params.append("limit", limit.toString());

          const response = await fetch(`/api/jobs?${params.toString()}`);

          if (!response.ok) {
            throw new Error("Failed to fetch missions");
          }

          // Response
          const { data, total } = await response.json();

          // Update the state
          set({
            missions: data,
            totalMissions: total,
            isLoading: false,
          });
        } catch (error) {
          set({
            error: "An error occurred",
            isLoading: false,
          });
        }
      },

      // Update filters
      setFilters: (newFilters) => {
        set((state) => ({
          filters: { ...state.filters, ...newFilters },
          page: 1,
        }));
        get().fetchMissions();
      },

      // Clear all filters
      clearFilters: () => {
        set({
          filters: {},
          page: 1,
        });
        get().fetchMissions();
      },

      selectMission: (mission) => {
        set({ selectedMission: mission });
      },

      setPage: (page) => {
        set({ page });
        get().fetchMissions();
      },
    }),
    {
      name: "mission-storage",
      partialize: (state) => ({
        filters: state.filters,
      }),
    }
  )
);

export default useMissionStore;
