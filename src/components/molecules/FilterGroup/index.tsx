import { ChangeEvent, FC, useCallback, useEffect, useState } from "react";
import { CheckBox } from "../CheckBox";
import { Text } from "components/atoms/Text";
import Box from "components/layout/Box";

type Item = {
  label: string;
  name: string;
};

type FilterGroupProps = {
  title: string;
  items: Item[];
  value?: string[];
  defaultValue?: string[];
  onChange?: (values: string[]) => void;
};

const FilterGroup: FC<FilterGroupProps> = ({
  title,
  items,
  value = [],
  defaultValue = [],
  onChange,
}) => {
  const [selected, setSelected] = useState(value ?? defaultValue);

  useEffect(() => {
    setSelected(value);
  }, [value]);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const name = e.target.name;
      //eのcheckedがtrueだったらnameを配列に加えて、falseだったら加えない
      //newSelectedにはチェックされているやつが入ってくる
      const newSelected = e.target.checked
        ? [...selected, name]
        : selected.filter((v) => v !== name);

      setSelected(newSelected);
      onChange && onChange(newSelected);
    },
    [onChange, selected],
  );

  return (
    <>
      <Text fontWeight="bold" variant="mediumLarge">
        {title}
      </Text>
      <Box marginTop={2}>
        {items.map(({ label, name }, i) => (
          <Box key={i} marginTop={i === 0 ? 0 : "4px"}>
            <CheckBox
              name={name}
              label={label}
              checked={!!selected.find((selectItem) => selectItem === name)}
              onChange={handleChange}
            />
          </Box>
        ))}
      </Box>
    </>
  );
};

export { FilterGroup };
