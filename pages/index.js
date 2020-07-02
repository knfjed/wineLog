import Link from "next/link";
import Layout from "../components/Layout";

export default () => (
  <Layout title="WINE手帳">
    <Link href="./other">
      <button>go to Other page</button>
    </Link>
  </Layout>
);
