import React from "react";
import Link from "./Link";

export default () => (
    <React.Fragment>
        <Link title={'Home'} routeName={'Home'} />
        <Link routeName={'PageA'} title={'Page A'} />
        <Link routeName={'PageB'} title={'Page B'} />
    </React.Fragment>
)

