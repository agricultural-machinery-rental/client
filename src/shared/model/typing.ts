export type TUserDto = {
  id: number;
  last_name: string;
  first_name: string;
  patronymic: string | null;
  birthday?: string | null;
  phone_number: string;
  email: string;
  organization_name?: string | null;
  inn?: string | null;
};

export type TLocationDto = {
  id: number;
  title: string;
  region: string;
};

export type TMachineryInfoDto = {
  mark: {
    brand: string;
    country_of_origin: string;
  };
  name: string;
  category: string;
  work_type: string[];
  description: string;
  attachments_available: boolean;
  power_hp: number;
  payload_capacity_kg: number;
};

export type TImageDto = {
  id: number;
  image: string;
  main_image: boolean;
  description_image: string;
};

export type TMachineryDto = {
  id: number;
  year_of_manufacture: number;
  available: boolean;
  location: TLocationDto;
  mileage: number;
  delivery_distance_km: number;
  price_per_shift: string;
  price_per_hour: string;
  is_favorited: boolean;
  machinery: TMachineryInfoDto;
  images: TImageDto[];
};

export type TOrderDto = {
  id: number;
  number: string;
  machinery: number;
  renter: TUserDto & { role: string };
  start_date: string;
  end_date: string;
  status: number;
  comment: string;
};

export type ValidationErrors = {
  errorMessage: string;
  field_errors: Record<string, string>;
};
