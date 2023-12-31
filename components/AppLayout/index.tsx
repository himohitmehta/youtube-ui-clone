"use client";
import {
	Inbox,
	Mail,
	Menu,
	Notifications,
	SearchOutlined,
} from "@mui/icons-material";
import {
	Avatar,
	Badge,
	Box,
	Divider,
	IconButton,
	InputBase,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography,
	alpha,
	styled,
} from "@mui/material";
import React from "react";
const Search = styled("div")(({ theme }) => ({
	position: "relative",
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	"&:hover": {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginRight: theme.spacing(2),
	marginLeft: 0,
	width: "100%",
	[theme.breakpoints.up("sm")]: {
		marginLeft: theme.spacing(3),
		width: "auto",
	},
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: "100%",
	position: "absolute",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "inherit",
	"& .MuiInputBase-input": {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("md")]: {
			width: "20ch",
		},
	},
}));

const styles = {
	header: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		px: 2,
		minHeight: "64px",
		maxHeight: "64px",
	},
	drawer: {
		width: "240px",
		borderRight: "1px solid rgba(0,0,0,0.12)",
		maxHeight: "calc(100vh - 64px)",
		minHeight: "calc(100vh - 64px)",
		overflowY: "auto",
	},
	main: {
		width: "calc(100% - 240px)",
		px: 2,
	},
	content: {
		display: "flex",
		maxHeight: "calc(100vh - 64px)",
		minHeight: "calc(100vh - 64px)",
		overflowY: "auto",
	},
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
	const [open, setOpen] = React.useState(true);
	const handleClickMenuIcon = () => {
		setOpen((prev) => !prev);
	};
	return (
		<Box>
			<Box sx={styles.header}>
				<IconButton
					size="large"
					edge="start"
					color="inherit"
					aria-label="open drawer"
					sx={{ mr: 2 }}
					onClick={handleClickMenuIcon}
					// onClick={onClickMenuButton}
				>
					<Menu />
				</IconButton>

				<Typography
					variant="h6"
					noWrap
					component="div"
					sx={{ display: { xs: "none", sm: "block" } }}
				>
					MUI
				</Typography>
				<Box sx={{ flexGrow: 1 }} />
				<Search>
					<SearchIconWrapper>
						<SearchOutlined />
					</SearchIconWrapper>
					<StyledInputBase
						placeholder="Search…"
						inputProps={{ "aria-label": "search" }}
					/>
				</Search>
				<Box sx={{ flexGrow: 1 }} />
				<Box sx={{ display: { xs: "none", md: "flex" } }}>
					<IconButton
						size="large"
						aria-label="show 4 new mails"
						color="inherit"
					>
						<Badge badgeContent={4} color="error">
							<Mail />
						</Badge>
					</IconButton>
					<IconButton
						size="large"
						aria-label="show 17 new notifications"
						color="inherit"
					>
						<Badge badgeContent={17} color="error">
							<Notifications />
						</Badge>
					</IconButton>
					<IconButton
						size="large"
						edge="end"
						aria-label="account of current user"
						color="inherit"
					>
						<Avatar>M</Avatar>
					</IconButton>
				</Box>
			</Box>
			<Box sx={styles.content}>
				{" "}
				<Box sx={{ ...styles.drawer, width: open ? "240px" : "64px" }}>
					{/* drawer */}
					<List>
						{data.map((item, index) => (
							<ListItem
								key={item.title}
								disablePadding
								sx={{
									display: "block",
									borderBottom:
										item.hasDivider &&
										"1px solid rgba(0,0,0,0.12)",
								}}
							>
								<ListItemButton
									sx={{
										minHeight: 48,
										justifyContent: open
											? "initial"
											: "center",
										px: 2.5,
									}}
								>
									{!item.isMenuTitle && (
										<ListItemIcon
											sx={{
												minWidth: 0,
												mr: open ? 3 : "auto",
												justifyContent: "center",
											}}
										>
											{index % 2 === 0 ? (
												<Inbox />
											) : (
												<Mail />
											)}
										</ListItemIcon>
									)}
									{open && (
										<ListItemText
											primary={item.title}
											primaryTypographyProps={{
												sx: {
													fontWeight: item.isMenuTitle
														? "700"
														: "400",
												},
											}}
											sx={{
												opacity: open ? 1 : 0,
											}}
										/>
									)}{" "}
								</ListItemButton>
							</ListItem>
						))}
					</List>
				</Box>
				<Box
					sx={{
						...styles.main,
						width: open
							? "calc(100% - 240px)"
							: "calc(100% - 64px)",
					}}
				>
					{children}
				</Box>
			</Box>
		</Box>
	);
}

const data = [
	{
		title: "Home",
		icon: Inbox,
		hasDivider: false,
		isMenuTitle: false,
		isMenuTitleButton: false,
	},
	{
		title: "Shorts",
	},
	{
		title: "Subscriptions",
		hasDivider: true,
	},
	{
		title: "You",
		// icon:"",
		isMenuTitle: true,
		isMenuTitleButton: true,
	},
	{
		title: "History",
	},
	{
		title: "Watch Later",
	},
	{
		title: "Liked Videos",
		hasDivider: true,
	},
	{
		title: "Explore",
		isMenuTitle: true,
	},
	{
		title: "Trending",
	},
	{
		title: "Shopping",
	},
	// Music,Movies, Live,Gaming, News, Sports,Learning, Fashion & Beauty, Podcasts
	// add these links here in the same format  above
	{
		title: "Music",
	},
	{
		title: "Movies",
	},
	{
		title: "Live",
	},
	{
		title: "Gaming",
	},
	{
		title: "News",
	},
	{
		title: "Sports",
	},
	{
		title: "Learning",
	},
	{
		title: "Fashion & Beauty",
	},
	{
		title: "Podcasts",
		hasDivider: true,
	},
	{
		title: "More from youtube",
		isMenuTitle: true,
	},
	{
		title: "Youtube Premium",
	},
	{
		title: "Youtube Music",
	},
	{
		title: "Youtube Kids",
		hasDivider: true,
	},
	{
		title: "Settings",
	},
	{
		title: "Report history",
	},
	{
		title: "Help",
	},
	{
		title: "Send feedback",
		hasDivider: true,
	},
];
