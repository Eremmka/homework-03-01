interface PriceOptions {
  price: number;
  discount: number;
  isInstallment: boolean;
  months: number;
}
const totalPrice = ({...props}: PriceOptions): number => {
  const discountAmount = props.price * (props.discount / 100);
  const finalPrice = props.price - discountAmount;
  if (props.isInstallment) {
    return finalPrice / props.months;
  }
  return finalPrice;
};

const price = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
console.log(price);