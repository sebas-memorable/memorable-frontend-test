import { useRepositoryFeature } from "src/app/features/repositories/repositories.feature";
import {
  CreativeLibraryFilter,
  CreativeLibraryFolder,
} from "src/graphql/client";

export interface CreativeLibraryRepository {
  listFolder(filter: CreativeLibraryFilter): Promise<CreativeLibraryFolder>;
}

export const useCreativeLibraryDomain = (
  repo = "CreativeLibraryRepository",
) => {
  const { repository } = useRepositoryFeature<CreativeLibraryRepository>(repo);

  const listFolder = async (filter: CreativeLibraryFilter) => {
    return repository.listFolder(filter);
  };

  return {
    listFolder,
  };
};
