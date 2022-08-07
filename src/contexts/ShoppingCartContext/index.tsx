import { createContext, ReactNode, useContext, useReducer } from "react";
import { Product } from "types";
import { ADD_PRODUCT, REMOVE_PRODUCT, shopReducer } from "./reducer";

type ShoppingCartContextProps = {
	cart: Product[];
	addProductToCart: (product: Product) => void;
	removeProductFromCart: (productId: number) => void;
};

const ShoppingCartContext = createContext<ShoppingCartContextProps>({
	cart: [],
	addProductToCart: () => {},
	removeProductFromCart: () => {},
});

export const useShoppingCartContext = (): ShoppingCartContextProps =>
	useContext(ShoppingCartContext);

type ShoppingCartContextProviderProps = {
	children: ReactNode;
};

/**
 * ショッピングカートコンテキストプロバイダー
 */
export const ShoppingCartContextProvider = ({
	children,
}: ShoppingCartContextProviderProps) => {
	const products: Product[] = [];
	const [cartState, dispatch] = useReducer(shopReducer, products);

	//商品をカートに追加
	const addProductToCart = (product: Product) => {
		dispatch({ type: ADD_PRODUCT, payload: product });
	};

	//商品をカートから削除
	const removeProductFromCart = (productId: number) => {
		dispatch({ type: REMOVE_PRODUCT, payload: productId });
	};

	return (
		<ShoppingCartContext.Provider
			value={{
				cart: cartState,
				addProductToCart,
				removeProductFromCart,
			}}
		>
			{children}
		</ShoppingCartContext.Provider>
	);
};
