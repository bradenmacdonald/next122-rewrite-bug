/** Add your relevant code here for the issue to reproduce */
export default function SiteHome(props) {
  return (
    <p>
      This is the <strong>other page</strong> for {props.siteDomain}.
    </p>
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
