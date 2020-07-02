import Link from "next/link";
import Layout from "../components/Layout";

export default () => (
  <Layout title="WINE手帳">
    <p>This is Other page</p>
    <div>
      <Link href="/">
        <button>Back to Top</button>
      </Link>
    </div>
  </Layout>
);
