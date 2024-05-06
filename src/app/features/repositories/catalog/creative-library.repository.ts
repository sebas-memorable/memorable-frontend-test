import { CreativeLibraryRepository } from "src/domain/library/creative-library.domain";
import {
  CreativeLibraryFilter,
  CreativeLibraryFolder,
} from "src/graphql/client";
import { client } from "../clients/graphql.client";

export class CreativeLibraryBackendRepository
  implements CreativeLibraryRepository
{
  async listFolder(
    filter: CreativeLibraryFilter,
  ): Promise<CreativeLibraryFolder> {
    return client.chain.query.folder({ input: filter }).get({
      id: true,
      creatives: {
        name: true,
        fileType: true,
        createdAt: true,
        thumbnailUrl: true,
      },
    }) as Promise<CreativeLibraryFolder>;
  }
}
