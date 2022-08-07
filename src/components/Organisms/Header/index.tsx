import { AppLogo } from "components/atoms/AppLogo";
import Button from "components/atoms/Button";
import {
	PersonIcon,
	SearchIcon,
	ShoppingCartIcon,
} from "components/atoms/IconButton";
import { ShapeImage } from "components/atoms/ShapeImage";
import { Spinner } from "components/atoms/Spinner";
import Box from "components/layout/Box";
import Flex from "components/layout/Flex";
import { BadgeIconButton } from "components/molecules/BadgeIconButton";
import { useAuthContext } from "contexts/AuthContext";
import { useShoppingCartContext } from "contexts/ShoppingCartContext";
import Link from "next/link";
import { Anchor, HeaderRoot, Nav, NavLink } from "./style";

// todo ルーティング系のパスをまとめる

const Header = () => {
	const { cart } = useShoppingCartContext();
	const { authUser, isLoading } = useAuthContext();

	return (
		<HeaderRoot>
			<Flex paddingLeft={3} paddingRight={3} justifyContent="space-between">
				{/* header left */}
				<Nav as="nav" height="56px" alignItems="center">
					<NavLink>
						<Link href="/" passHref>
							<Anchor as="a">
								<AppLogo />
							</Anchor>
						</Link>
					</NavLink>
					<NavLink>
						<Box display={{ base: "none", md: "block" }}>
							<Link href="/search" passHref>
								<Anchor as="a">すべて</Anchor>
							</Link>
						</Box>
					</NavLink>
					<NavLink>
						<Box display={{ base: "none", md: "block" }}>
							<Link href="/search/clothes" passHref>
								<Anchor as="a">トップス</Anchor>
							</Link>
						</Box>
					</NavLink>
					<NavLink>
						<Box display={{ base: "none", md: "block" }}>
							<Link href="/search/books" passHref>
								<Anchor as="a">本</Anchor>
							</Link>
						</Box>
					</NavLink>
					<NavLink>
						<Box display={{ base: "none", md: "block" }}>
							<Link href="/search/shoes" passHref>
								<Anchor as="a">シューズ</Anchor>
							</Link>
						</Box>
					</NavLink>
				</Nav>
				{/* header right */}
				<Nav as="nav" height="56px" alignItems="center">
					<NavLink>
						<Box display={{ base: "block", md: "none" }}>
							<Link href="/search" passHref>
								<Anchor as="a">
									<SearchIcon />
								</Anchor>
							</Link>
						</Box>
					</NavLink>
					<NavLink>
						<Box display={{ base: "none", md: "block" }}>
							<Link href="/cart" passHref>
								<Anchor as="a">
									<BadgeIconButton
										icon={<ShoppingCartIcon size={24} />}
										size="24px"
										badgeContent={cart.length === 0 ? undefined : cart.length}
										badgeBackgroundColor="primary"
									/>
								</Anchor>
							</Link>
						</Box>
					</NavLink>
					{/* ログイン画面の分岐 */}
					<NavLink>
						{(() => {
							//ユーザーがログインしている場合
							if (authUser) {
								return (
									<Link href="/cart" passHref>
										<Anchor as="a">
											<ShapeImage
												width={24}
												height={24}
												src={authUser.profileImageUrl}
												shape="circle"
											/>
										</Anchor>
									</Link>
								);
							} else if (isLoading) {
								//ロード中にスピナーを表示
								return <Spinner size={20} strokeWidth={2} />;
							} else {
								//サインインしてない場合はアイコンを表示
								return (
									<Link href="/signin" passHref>
										<Anchor as="a">
											<PersonIcon size={24} />
										</Anchor>
									</Link>
								);
							}
						})()}
					</NavLink>
					<NavLink>
						<Link href="/sell" passHref>
							<Button as="a">出品</Button>
						</Link>
					</NavLink>
				</Nav>
			</Flex>
		</HeaderRoot>
	);
};

export { Header };
