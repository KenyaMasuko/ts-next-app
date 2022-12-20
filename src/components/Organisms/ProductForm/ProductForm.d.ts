import { FileData } from "components/molecules/InputImages";
import { Category, Condition } from "types";

type ProductFormData = {
  image: FileData[];
  title: string;
  description: string;
  category: Category;
  condition: Condition;
  price: number;
};

type ProductFormProps = {
  /**
   * 出品ボタンを押した時のイベントハンドラ
   */
  onProductSave?: (data: ProductFormData) => void;
};

export { ProductFormData, ProductFormProps };
