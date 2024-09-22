export type ShopContextType = {
    search: string;
    showSearch: boolean;
    setSearch: (value: string) => void;
    setShowSearch: (value: boolean) => void;
}