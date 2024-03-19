import React, { FC } from "react";
import CodePreview from "../../code-preview/code-preview";
import Link from "next/link";

const TypeVsInterface: FC = () => {
  return (
    <div>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // spoose that we have an object such as below:

      let user = {
        email: "amasafat@gmail.com",
        password: 123,
      }

    // we use interface to object types defaultly and we use implements keyword to implement an interface in classes too.
    // when we use implements an interface into a class, we forced to use that interface properties but we can use other properties too.

      interface User {
        email: string
        passwword: number
      }

      let user = {
        email: "amasafat@gmail.com",
        password: 123,
      }

    // for classes:

      interface User {
        email: string
        passwword: number
      }

      class Auth implements User {
        email: string
        password: number
        userName: string
      }

    // so we can define a function based on above class that get userInfo argument with type of User that contains email and password forcely:

      function login(userInfo: User) {}

      login(new Auth())

    // the next difference between interface and type is that we can reasign the interface:

      interface User {
        email: string
        password: number
      }

      interface {
        id: number
      }

    // now id is added to User interface and User interface have 3 property: email, password, id
    // we can use type or interface, but type is generally and contains all of the types and interface is for objects
      `}
      />
    </div>
  );
};

export default TypeVsInterface;
