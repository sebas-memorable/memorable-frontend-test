import { useRepositoryFeature } from "src/app/features/repositories/repositories.feature";

export interface SectorsRepository {
  getSectorsName(): Promise<{ id: number; name: string }[]>;
  getSectorsCount(): Promise<{ id: number; count: number }[]>;
}

export const useSectorsDomain = (repo = "SectorsRepository") => {
  const { repository } = useRepositoryFeature<SectorsRepository>(repo);

  const getSectorsName = async () => {
    return repository.getSectorsName();
  };

  const getSectorsCount = async () => {
    return repository.getSectorsCount();
  };

  return {
    getSectorsName,
    getSectorsCount,
  };
};
