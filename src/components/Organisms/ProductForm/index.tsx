import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { ProductFormData, ProductFormProps } from "./ProductForm";
import Button from "components/atoms/Button";
import { Input } from "components/atoms/Input";
import { Text } from "components/atoms/Text";
import { TextArea } from "components/atoms/TextArea";
import Box from "components/layout/Box";
import { Dropdown } from "components/molecules/Dropdown";
import { InputImages } from "components/molecules/InputImages";

const ProductForm: FC<ProductFormProps> = ({ onProductSave }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ProductFormData>();

  const onSubmit = (data: ProductFormData) => {
    onProductSave && onProductSave(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* 商品画像 */}
      <Box marginBottom={3}>
        <Box marginBottom={2}>
          <Text as="label" variant="mediumLarge" fontWeight="bold">
            商品の写真
          </Text>
        </Box>
        {/* 商品画像 */}
        <Controller
          control={control}
          name="image"
          rules={{ required: true }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <InputImages
              images={value ?? []}
              onChange={onChange}
              maximumNumber={1}
              hasError={!!error}
            />
          )}
        />
        {errors.image && (
          <Text color="danger" variant="small" paddingLeft={1}>
            商品の画像は必須です
          </Text>
        )}
      </Box>

      <Box marginBottom={3}>
        <Box marginBottom={2}>
          <Text as="label" variant="mediumLarge" fontWeight="bold">
            商品情報
          </Text>
        </Box>
        {/* タイトル */}
        <Box marginBottom={1}>
          <Text as="label" variant="medium">
            タイトル
          </Text>
          {/* todo ここのバリデーションをreact hook formで調べる */}
          <Input
            {...register("title", { required: true })}
            name="title"
            type="text"
            placeholder="商品のタイトル"
            hasError={!!errors.title}
          />
          {errors.title && (
            <Text color="danger" variant="small" paddingLeft={1}>
              タイトルの入力は必須です
            </Text>
          )}
        </Box>
        {/* 概要 */}
        <Box marginBottom={1}>
          <Text as="label" variant="medium">
            概要
          </Text>
          <Controller
            control={control}
            name="description"
            rules={{ required: true }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextArea
                placeholder="最高の商品です"
                hasError={!!error}
                onChange={onChange}
              >
                {value}
              </TextArea>
            )}
          />
          {errors.description && (
            <Text color="danger" variant="small" paddingLeft={1}>
              概要の入力は必須です
            </Text>
          )}
        </Box>
        {/* カテゴリ */}
        <Box marginBottom={1}>
          <Text as="label" variant="medium">
            カテゴリ
          </Text>
          <Controller
            control={control}
            name="category"
            rules={{ required: true }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <Dropdown
                options={[
                  { value: "shoes", label: "シューズ" },
                  { value: "clothes", label: "トップス" },
                  { value: "book", label: "本" },
                ]}
                value={value}
                placeholder="カテゴリを選択してください"
                hasError={!!error}
                onChange={(v) => onChange(v?.value)}
              />
            )}
          />
          {errors.category && (
            <Text color="danger" variant="small" paddingLeft={1}>
              カテゴリの選択は必須です
            </Text>
          )}
        </Box>
        {/* 商品の状態 */}
        <Box marginBottom={1}>
          <Text as="label" variant="medium">
            商品の状態
          </Text>
          <Controller
            control={control}
            name="condition"
            rules={{ required: true }}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <Dropdown
                options={[
                  { value: "used", label: "中古" },
                  { value: "new", label: "新品" },
                ]}
                value={value ?? "used"}
                placeholder="商品の状態を選択してください"
                hasError={!!error}
                onChange={(v) => onChange(v?.value)}
              />
            )}
          />
          {errors.condition && (
            <Text color="danger" variant="small" paddingLeft={1}>
              商品の状態の入力は必須です
            </Text>
          )}
        </Box>
        {/* 価格 */}
        <Box marginBottom={1}>
          <Text as="label" variant="medium">
            価格（円）
          </Text>
          <Input
            {...register("price", { required: true })}
            name="price"
            type="number"
            placeholder="商品の値段"
            hasError={!!errors.price}
          />
          {errors.price && (
            <Text color="danger" variant="small" paddingLeft={1}>
              価格の入力は必須です
            </Text>
          )}
        </Box>
      </Box>
      {/* 送信ボタン */}
      <Button width="100%" type="submit">
        出品
      </Button>
    </form>
  );
};

export { ProductForm };
