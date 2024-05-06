import { Input } from "antd";
import React, { FC, InputHTMLAttributes, useCallback } from "react";
import { SearchOutlined } from "@ant-design/icons";
import debounce from "lodash.debounce";
const MAX_SEARCH_FILTER_DEBOUNCE_INTERVAL = 500;

export const SearchInputUI: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  placeholder,
  onChange,
  ...props
}) => {
  const handleDebouncedChange = useCallback(
    debounce(onChange!, MAX_SEARCH_FILTER_DEBOUNCE_INTERVAL),
    [onChange],
  );

  return (
    <div>
      <Input
        {...(props as any)}
        onChange={handleDebouncedChange}
        placeholder={placeholder ?? "Search..."}
        prefix={<SearchOutlined />}
      />
    </div>
  );
};
