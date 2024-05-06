import { Avatar } from "antd";
import { ColumnsType } from "antd/es/table";
import { FC } from "react";
import { TableUI } from "src/app/ui/tables/table.ui";
import { Creative } from "src/graphql/client";
import { titleCaseFormatterTool } from "src/app/tools/formatters/title-case.formatter.tool";
import { dateFormatterTool } from "src/app/tools/formatters/date.formatter.tool";

export interface CreativeLibraryTableWidgetProps {
  data?: any[];
  searchText?: string;
  loading?: boolean;
}

export const CreativeLibraryTableWidget: FC<
  CreativeLibraryTableWidgetProps
> = ({ data = [], loading, searchText = "" }) => {
  const generateCreativeLibraryKey = (creative: Creative) => ({
    ...creative,
    key: creative.name,
  });

  const columns: ColumnsType<Creative> = [
    {
      title: "Name",
      dataIndex: "name",
      filteredValue: [searchText],
      onFilter: (value, record) => {
        const lowerCaseSearchText = searchText.toLocaleLowerCase();
        return (
          record.name.toLocaleLowerCase().includes(lowerCaseSearchText) ||
          dateFormatterTool(
            new Date(record.createdAt),
            navigator.language,
          ).includes(lowerCaseSearchText) ||
          titleCaseFormatterTool(record.fileType)
            .toLocaleLowerCase()
            .includes(lowerCaseSearchText)
        );
      },
      render: (name, record) => {
        return (
          <div style={{ display: "flex", gap: "8px" }}>
            <Avatar
              shape="square"
              src={record.thumbnailUrl}
              style={{
                backgroundColor: "rgb(230 244 255)",
                color: "#1677ff",
                fontWeight: "bold",
              }}
            >
              {record.thumbnailUrl ? "" : name[0]}
            </Avatar>
            <div className="flex items-center">
              <div>{name}</div>
            </div>
          </div>
        );
      },
    },
    {
      title: "Uploaded Date",
      dataIndex: "createdAt",
      render: (createdAt) => {
        return (
          <div className="flex items-center">
            <div>
              {dateFormatterTool(new Date(createdAt), navigator.language)}
            </div>
          </div>
        );
      },
    },
    {
      title: "File Type",
      dataIndex: "fileType",
      render: (fileType) => {
        return (
          <div className="flex items-center">
            <div>{titleCaseFormatterTool(fileType)}</div>
          </div>
        );
      },
    },
  ];

  return (
    <TableUI
      columns={columns}
      data={data.map(generateCreativeLibraryKey)}
      isLoading={loading}
    />
  );
};
