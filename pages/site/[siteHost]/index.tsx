import Link from "next/link";

/** Add your relevant code here for the issue to reproduce */
export default function SiteHome(props) {
  return (
    <>
      <p>This is the site home page for {props.siteDomain}.</p>
      <p>
        Try{" "}
        <Link href="/other">
          <a>this link</a>
        </Link>{" "}
        - it won't work on the client side (or it will work but as a hard navigation - "Error: Failed to load static props"; check the console and network log to see the 404).
      </p>
      <p>e.g. you'll get a 404 for http://localhost:3000/_next/data/development/site/localhost/other.json?siteHost=localhost</p>
    </>
  );
}

export const getStaticPaths = async () => {
  return await {
    paths: [],
    fallback: "blocking"
  };
};

export const getStaticProps = async (context) => {
  return {
    props: {
      siteDomain: context.params.siteHost
    }
  };
};
