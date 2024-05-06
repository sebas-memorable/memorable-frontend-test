import { SectorsRepository } from "src/domain/sectors/sectors.domain";
import {
  sectorsCountsMockData,
  sectorsNamesMockData,
} from "src/app/features/repositories/mocks/sectors.mocks";

export class SectorsBackendRepository implements SectorsRepository {
  async getSectorsCount(): Promise<{ id: number; count: number }[]> {
    // TODO: Remove mocks when getSectorsCount BE service becomes available.
    return new Promise((resolve) => {
      setTimeout(() => resolve(sectorsCountsMockData), 1000);
    });
  }

  async getSectorsName(): Promise<{ id: number; name: string }[]> {
    // TODO: Remove mocks when getSectorsName BE service becomes available.
    return new Promise((resolve) => {
      setTimeout(() => resolve(sectorsNamesMockData), 1000);
    });
  }
}
