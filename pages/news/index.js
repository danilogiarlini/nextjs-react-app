import Link from "next/link";
import { Fragment } from "react";

const NewsPage = () => {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href='/news/next-is-a-great-framework'>NextJS is a great framework</Link>
        </li>
        <li>Some other link</li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;
