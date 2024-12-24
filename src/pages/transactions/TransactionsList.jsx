
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import { EyeIcon } from "@heroicons/react/24/outline";

import { CalendarDateRangeIcon } from "@heroicons/react/24/solid";
import Pagination from "../../components/pagination/Pagination";

const people = [
  {
    name: "Jeremy Scholes",
    date: "2024-09-05",
    time: "2:27pm",
    type: "Transfer",
    sessionId: "9EA128C",
    amount: "241,984",
    status: "pending",

    bankName: "GT Bank",
    accountNumber: "3077959505",
    creditWallet: "USDC",
    creditWalletAddress: "asdJhSWiYi2Asas",
    title: "Front-end Developer",
    department: "Optimization",
    email: "lisay.wton@example.com",
    role: "Member",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Lindsay Walton",
    date: "2024-09-05",
    time: "2:27pm",
    type: "Deposit",
    sessionId: "1BC34E",
    amount: "239,586",
    status: "success",
    debitWallet: "USDT",
    debitWalletAddress: "iUS87SWQASAAjdsh",
    creditWallet: "USDC",
    creditWalletAddress: "asdJhSWiYi2Asas",
    title: "Front-end Developer",
    department: "Optimization",
    email: "lindsay.watn@example.com",
    role: "Member",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Lindsay Walton",
    date: "2024-09-05",
    time: "2:27pm",
    type: "Transfer",
    sessionId: "9EA128C",
    amount: "241,984",
    status: "pending",
    bankName: "GT Bank",
    accountNumber: "3077959505",
    creditWallet: "USDC",
    creditWalletAddress: "asdJhSWiYi2Asas",
    title: "Front-end Developer",
    department: "Optimization",
    email: "lay.wton@example.com",
    role: "Member",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Lindsay Walton",
    date: "2024-09-05",
    time: "2:27pm",
    type: "Deposit",
    sessionId: "1BC34E",
    amount: "239,586",
    status: "success",
    debitWallet: "USDT",
    debitWalletAddress: "iUS87SWQASAAjdsh",
    creditWallet: "USDC",
    creditWalletAddress: "asdJhSWiYi2Asas",
    title: "Front-end Developer",
    department: "Optimization",
    email: "dsay.n@example.com",
    role: "Member",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Lindsay Walton",
    date: "2024-09-05",
    time: "2:27pm",
    type: "Transfer",
    sessionId: "9EA128C",
    amount: "241,984",
    status: "pending",
    bankName: "GT Bank",
    accountNumber: "3077959505",
    creditWallet: "USDC",
    creditWalletAddress: "asdJhSWiYi2Asas",
    title: "Front-end Developer",
    department: "Optimization",
    email: "lday.wn@example.com",
    role: "Member",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Lindsay Walton",
    date: "2024-09-05",
    time: "2:27pm",
    type: "Deposit",
    sessionId: "1BC34E",
    amount: "239,586",
    status: "success",
    debitWallet: "USDT",
    debitWalletAddress: "iUS87SWQASAAjdsh",
    creditWallet: "USDC",
    creditWalletAddress: "asdJhSWiYi2Asas",
    title: "Front-end Developer",
    department: "Optimization",
    email: "lssy.wtn@example.com",
    role: "Member",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },

  // More people...
];

export default function RecipientList() {

  return (
    <div className="mt-4 rounded-xl bg-white pt-4 shadow-sm">
      <div className="flex justify-between px-4 py-2 sm:items-center sm:px-6 lg:px-4">
        <div className="sm:flex-auto">
          <h1 className="mt-1 text-base font-semibold text-gray-900">
            Transactions
          </h1>
        </div>
        <div className="w-full max-w-lg lg:max-w-xs">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <MagnifyingGlassIcon
                aria-hidden="true"
                className="size-5 text-gray-400"
              />
            </div>
            <input
              id="search"
              name="search"
              type="search"
              placeholder="Search"
              className="block w-full rounded-lg border-0 bg-white py-2 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>
        <div className="sm:ml-2 sm:flex-none">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-primary shadow-sm ring-1 ring-inset ring-primary hover:bg-gray-50">
                <CalendarDateRangeIcon
                  aria-hidden="true"
                  className="-mr-1 size-5 text-primary"
                />
                Select date
              </MenuButton>
            </div>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="py-1">
                <MenuItem>
                  <button
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                  >
                    Pending
                  </button>
                </MenuItem>
                <MenuItem>
                  <button
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                  >
                    In processing
                  </button>
                </MenuItem>
                <MenuItem>
                  <button
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                  >
                    Successful
                  </button>
                </MenuItem>
                <MenuItem>
                  <button
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                  >
                    Failed
                  </button>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
        </div>
        <div className="sm:ml-2 sm:flex-none">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-primary shadow-sm ring-1 ring-inset ring-primary hover:bg-gray-50">
                Categories
                <ChevronDownIcon
                  aria-hidden="true"
                  className="-mr-1 size-5 text-primary"
                />
              </MenuButton>
            </div>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="py-1">
                <MenuItem>
                  <button
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                  >
                    Pending
                  </button>
                </MenuItem>
                <MenuItem>
                  <button
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                  >
                    In processing
                  </button>
                </MenuItem>
                <MenuItem>
                  <button
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                  >
                    Successful
                  </button>
                </MenuItem>
                <MenuItem>
                  <button
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                  >
                    Failed
                  </button>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
        </div>
        <div className="sm:ml-2 sm:flex-none">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-primary shadow-sm ring-1 ring-inset ring-primary hover:bg-gray-50">
                All Status
                <ChevronDownIcon
                  aria-hidden="true"
                  className="-mr-1 size-5 text-primary"
                />
              </MenuButton>
            </div>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="py-1">
                <MenuItem>
                  <button
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                  >
                    Pending
                  </button>
                </MenuItem>
                <MenuItem>
                  <button
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                  >
                    In processing
                  </button>
                </MenuItem>
                <MenuItem>
                  <button
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                  >
                    Successful
                  </button>
                </MenuItem>
                <MenuItem>
                  <button
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                  >
                    Failed
                  </button>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
        </div>
      </div>
      <div className="mt-6 flow-root">
        <div className="-my-2 mb-3 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="mr-3 bg-gray-100">
                <tr className="">
                  <th
                    scope="col"
                    className="py-3.5 pl-2 pr-1 text-left text-sm font-semibold text-gray-900 sm:pl-4"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Debited Wallet
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Credited Wallet
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Transaction type
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Session ID
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Amount
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Status
                  </th>
                  {/* <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Role
                  </th> */}
                  <th
                    scope="col"
                    className="relative py-3.5 pl-0 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-0"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white pb-3">
                {people.map((person) => (
                  <tr key={person.email}>
                    <td className="whitespace-nowrap py-5 pl-2 pr-1 text-sm sm:pl-4">
                      <div className="flex items-center">
                        <div className="">
                          <div className="font-medium text-gray-900">
                            {person.date}
                          </div>
                          <div className="mt-1 text-gray-500">
                            {person.time}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      <div className="text-gray-900">{person.debitWallet}</div>
                      <div className="mt-1 text-gray-500">
                        {person.debitWalletAddress}
                      </div>
                    </td>
                    <td className="whitespace-nowrap py-5 pl-2 pr-1 text-sm sm:pl-4">
                      <div className="flex items-center">
                        <div className="">
                          <div className="font-medium text-gray-900">
                            {person.creditWallet}
                          </div>
                          <div className="mt-1 text-gray-500">
                            {person.creditWalletAddress}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      {person.type}
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      {person.sessionId}
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      {person.amount}
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      <span className="inline-flex items-center rounded-md bg-green-100 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                        Active
                      </span>
                    </td>

                    <td className="relative whitespace-nowrap py-5 pl-3 pr-2 text-center text-sm font-medium sm:pr-4">
                      <EyeIcon
                        aria-hidden="true"
                        className="size-4 cursor-pointer text-center text-gray-400"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
}
