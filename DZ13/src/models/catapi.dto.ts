export interface ImageSearchResponse {
    id: string;
    url: string;
}

export interface FavouriteResponse {
    id: number;
    image_id: string;
    sub_id: string;
}

export interface VoteResponse {
    id: number;
    image_id: string;
    sub_id: string;
    value: number;
}

export interface OrderDto {
    id: number;
    petId: number;
    quantity: number;
    shipDate: string;
    status: 'placed';
    complete: boolean;
}
