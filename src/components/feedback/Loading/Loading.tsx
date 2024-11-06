

import { TLoading } from "../../../types/shared";
import { CategorySkeleton } from "../skeleton/CategorySkeleton/CategorySkeleton";
import CartSkeleton from "../skeleton/CartSkeleton/CartSkeleton";
import ProductSkeleton from "../skeleton/ProductSkeleton/ProductSkeleton";

const skeletonsTypes = {
  category: CategorySkeleton,
  product: ProductSkeleton,
  cart: CartSkeleton,
};

type LoadingProps = {
  status: TLoading;
  error: null | string;
  children: React.ReactNode;
  type?: keyof typeof skeletonsTypes;
};

const Loading = ({
  status,
  // error,
  children,
  type = "category",
}: LoadingProps) => {
  const Component = skeletonsTypes[type];

  if (status === "pending") {
    return <Component />;
  }
  if (status === "failed") {
    return (
      <div>
        {/* <LottieHandler type="error" message={error as string} /> */}
      </div>
    );
  }
  return <div>{children}</div>;
};

export default Loading;