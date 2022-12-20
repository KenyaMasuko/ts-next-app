import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

const GlobalSpinnerContext = createContext<boolean>(false);
const GlobalSpinnerActionsContext = createContext<
  Dispatch<SetStateAction<boolean>>
>(() => {});

//グローバルスピナーの表示・日表示
export const useGlobalSpinnerContext = (): boolean =>
  useContext<boolean>(GlobalSpinnerContext);

// グローバルスピナーの表示・非表示のアクション
export const useGlobalSpinnerActionsContext = (): Dispatch<
  SetStateAction<boolean>
> => useContext<Dispatch<SetStateAction<boolean>>>(GlobalSpinnerActionsContext);

type GlobalSpinnerContextProvider = {
  children?: ReactNode;
};

/**
 * グローバルスピナーコンテキストプロバイダー
 */
const GlobalSpinnerContextProvider: FC<GlobalSpinnerContextProvider> = ({
  children,
}) => {
  //無駄なレンダリングを避けるために、分けている
  const [isGlobalSpinner, setGlobalSpinner] = useState(false);
  return (
    <GlobalSpinnerContext.Provider value={isGlobalSpinner}>
      <GlobalSpinnerActionsContext.Provider value={setGlobalSpinner}>
        {children}
      </GlobalSpinnerActionsContext.Provider>
    </GlobalSpinnerContext.Provider>
  );
};

export { GlobalSpinnerContextProvider };
