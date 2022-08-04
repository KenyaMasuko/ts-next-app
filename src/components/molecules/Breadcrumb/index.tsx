import Flex from "components/layout/Flex";
import { FC, ReactNode } from "react";
import styled from "styled-components";

const BreadcurmbRoot = styled(Flex)`
	list-style: none;
	padding: 0px;
	margin: 0px;
`;

type BreadcrumbProps = {
	children?: ReactNode;
};

/**
 * パンくずリスト
 */
const Breadcrumb: FC<BreadcrumbProps> = ({ children }) => {
	return <BreadcurmbRoot as="ol">{children}</BreadcurmbRoot>;
};

export { Breadcrumb };
