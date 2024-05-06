import { FC, useState } from "react";
import CardPageUI from "src/app/ui/cards/card-page.ui";
import { SearchInputUI } from "src/app/ui/inputs/search-input.ui";
import { useSessionFeature } from "src/app/features/session/session.feature";
import { useCreativeLibraryDomain } from "src/domain/library/creative-library.domain";
import useSWR from "swr";
import { Descriptions } from "antd";
import { CreativeLibraryTableWidget } from "src/app/pages/creative-intelligence-suite/pages/creative-lab/pages/creative-library/creative-library.table.widget";

const CreativeLibraryPage: FC = () => {
  const { currentBrand } = useSessionFeature();
  const { listFolder } = useCreativeLibraryDomain();
  const [searchText, setSearchText] = useState<string>();

  const { data, isLoading } = useSWR(
    { brandId: currentBrand?.id, creativeType: "Creative" },
    listFolder,
  );

  const onSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e?.target?.value);
  };

  return (
    <CardPageUI>
      <header
        className="mb-4 flex gap-4"
        style={{
          position: "sticky",
          top: "0px",
          zIndex: "12",
          background: "white",
          padding: "13px 0",
        }}
      >
        <SearchInputUI onChange={onSearchInputChange} />
      </header>
      <div>
        <header className="mb-4 flex gap-2">
          <div className="h-4" />
          <Descriptions title="Creatives"></Descriptions>
          <div className="flex-1" />
        </header>
        <CreativeLibraryTableWidget
          data={data?.creatives}
          searchText={searchText}
          loading={isLoading}
        />
      </div>
    </CardPageUI>
  );
};
export default CreativeLibraryPage;
