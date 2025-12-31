export const rupiah = (value: number) => {
    return new Intl.NumberFormat('id-ID').format(value);
  };