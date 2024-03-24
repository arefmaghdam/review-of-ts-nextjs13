import React, { FC } from "react";
import CodePreview from "../../code-preview/code-preview";
import Link from "next/link";

const FormImplementation: FC = () => {
  return (
    <div>
      <Link href="/">back</Link>
      <CodePreview
        imgURL=""
        content={`
    // we want to create a form with 2 input and 1 button that display added users in below of form:
    // index.html codes:

        <body class="bg-slate-900">
            <div id="app">
                <form id="add-user-form" class="flex flex-col gap-5 max-w-xl p-6 my-10 mx-auto bg-slate-800 rounded-md">
                    <input type="text" placeholder="Name" id="name" class="p-2 bg-slate-600 text-slate-300 outline-none rounded-md"/>
                    <input type="text" placeholder="Email" id="email" class="p-2 bg-slate-600 text-slate-300 outline-none rounded-md"/>
                    <button type="submit" class="p-2 bg-slate-900 text-slate-100 rounded-md">Add User</button>
                </form>
                <div id="user-list" class="flex flex-wrap justify-center max-w-xl mx-auto my-10 gap-5" ></div>
            </div>
        </body>

    // main.ts codes:

        import "./index.css"

        const form = document.querySelector<HTMLFormElement>("#add-user-form)
        const name = document.querySelector<HTMLInputElement>("#name)
        const email = document.querySelector<HTMLInputElement>("#email)
        const user = document.querySelector<HTMLDivElement>("#user-list)

        form?.addEventListener("submit", e => {   // ? => optional chaining => form-value? return value : return undefined
          e.preventDefault|()
          if(name?.value === undefined | email?.value === undefined) return
        })

        const userItem = {
          id:1,
          name: name.value,
          email: email.value,
        }

    // but we want to change id value from static to dynamic and produce as dynamic and random, we can use Math.random but now we want to use uuid package
    // inastallation:

      npm install uuid

    // using:

        import {v4 as uuidv4} from "uuid"
        uuidv4()

    // now our main.ts file codes are:

        import {v4 as uuidv4} from "uuid"
        import "./index.css"

        type Item = {
          id: string
          name: string
          email: string
        }

        const form = document.querySelector<HTMLFormElement>("#add-user-form)
        const name = document.querySelector<HTMLInputElement>("#name)
        const email = document.querySelector<HTMLInputElement>("#email)
        const user = document.querySelector<HTMLDivElement>("#user-list)

        form?.addEventListener("submit", e => {   // ? => optional chaining => form-value? return value : return undefined
          e.preventDefault|()
          if(name?.value === undefined | email?.value === undefined) return

          const userItem: Item = {
            id: uuidv4(),
            name: name.value,
            email: email.value,
          }
          addUser(userItem)

          name.value = ""
          email.value = ""
        })

        function addUser(item: Item) {
          const container = document.createElement("div")
          const nameElement = document.createElement("p")
          const emailElement = document.createElement("p")

          nameElement.append(item.name)
          emailElement.append(item.email)
          container.append(nameElement, emailElement)

          users?.append(container)

          container.classList.add(
            "p-6",
            "bg-slate-800",
            "rounded-md",
            "text-center",
            "text-slate-200",
          )
        }

    // but we have an error that typescript can not find uuid typescript versin and id type is any, so we must install typescript version of uuid as below if that be exist:

        npm i --save-dev @types/uuid

    // now id type is string but not any
      `}
      />
    </div>
  );
};

export default FormImplementation;
