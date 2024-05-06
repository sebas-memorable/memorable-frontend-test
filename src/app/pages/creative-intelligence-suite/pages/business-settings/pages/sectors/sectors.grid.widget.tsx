import { Col, Row } from "antd";
import { FC } from "react";

export interface SectorsGridWidgetProps {
  data?: { id: number; name: string; count: number }[];
  searchText?: string;
  loading?: boolean;
}

const SectorCard: React.FC<{ name: string; count: number }> = (props) => (
  <div
    className="flex flex-col items-center justify-center"
    style={{
      backgroundColor: "rgba(0, 0, 0, 0.3",
      width: "150px",
      height: "150px",
    }}
  >
    <div style={{ textAlign: "center", padding: "10px" }}>
      <b>{props.name}</b>
    </div>
    <div>{props.count}</div>
  </div>
);

export const SectorsGridWidget: FC<SectorsGridWidgetProps> = ({ data }) => {
  return (
    <Row gutter={[16, 16]} justify="start" align="middle">
      {data?.map((s) => (
        <Col key={s.id}>
          <SectorCard name={s.name} count={s.count} />
        </Col>
      ))}
    </Row>
  );
};
