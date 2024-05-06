import { FC, useMemo } from "react";
import CardPageUI from "src/app/ui/cards/card-page.ui";
import { Descriptions } from "antd";
import { SectorsGridWidget } from "src/app/pages/creative-intelligence-suite/pages/business-settings/pages/sectors/sectors.grid.widget";
import useSWR from "swr";
import { useSectorsDomain } from "src/domain/sectors/sectors.domain";
import { EmptyLoaderUI } from "src/app/ui/empty/empty-loader.ui";
import { EmptyCreateUI } from "src/app/ui/empty/empty-create.ui";

const SectorsPage: FC = () => {
  const { getSectorsName, getSectorsCount } = useSectorsDomain();
  const { data: sectorsCount, isLoading: isLoadingSectorsCount } = useSWR(
    "getSectorsCount",
    getSectorsCount,
  );
  const { data: sectorsName, isLoading: isLoadingSectorsName } = useSWR(
    "getSectorsName",
    getSectorsName,
  );

  const data = useMemo(() => {
    if (sectorsCount && sectorsName) {
      const sectorCountsByKey = sectorsCount.reduce((accum, sc) => {
        accum[sc.id] = sc.count;
        return accum;
      }, {});
      return sectorsName.map((sc) => ({
        id: sc.id,
        name: sc.name,
        count: sectorCountsByKey[sc.id],
      }));
    }
  }, [sectorsCount, sectorsName]);

  return (
    <CardPageUI>
      <div>
        <header className="mb-4 flex gap-2">
          <div className="h-4" />
          <Descriptions title="Sectors"></Descriptions>
          <div className="flex-1" />
        </header>
        <EmptyLoaderUI
          isLoading={isLoadingSectorsCount || isLoadingSectorsName}
        />
        {!(isLoadingSectorsCount || isLoadingSectorsName) && (
          <div>
            {data ? (
              <SectorsGridWidget data={data} />
            ) : (
              <EmptyCreateUI description="You don't have any sectors yet." />
            )}
          </div>
        )}
      </div>
    </CardPageUI>
  );
};
export default SectorsPage;
