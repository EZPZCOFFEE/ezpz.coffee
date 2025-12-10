import { PropsWithChildren } from "react";

import Layout from "@/components/custom/Layout";

const MainLayout = ({ children }: PropsWithChildren) => {
  return <Layout>{children}</Layout>;
};

export default MainLayout;
