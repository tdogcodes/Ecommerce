import {create} from 'zustand'

export interface CartItem{
    id: string;
    name: string;
    price: number;
    imageUrl: string | null; 
    quantity: number;
}

interface CartStore {
    items: CartItem[];
    addItem: (item: CartItem) => void;
}

export const useCartStore = create