
import AppLayout from "../../components/layout/AppLayout";


const secondaryNavigation = [
  { name: "Overview", href: "#", current: true },
  { name: "Customers", href: "#", current: false },
  { name: "Deposits", href: "#", current: false },
  { name: "Withdrawals", href: "#", current: false },
  { name: "Expenses", href: "#", current: false },
];
const stats = [
  {
    name: "Customers",
    value: "0",
    change: "0",
    changeType: "positive",
  },
  {
    name: "Balance",
    value: "₦0.00",
    change: "0",
    changeType: "negative",
  },
  {
    name: "Deposits",
    value: "₦0.00",
    change: "0",
    changeType: "positive",
  },
  {
    name: "Withdrawals",
    value: "₦0.00",
    change: "₦0.00",
    changeType: "negative",
  },
];
const stats2 = [
    { name: "Loans", stat: "₦0.00" },
    { name: "Expenditure", stat: "₦0.00" },
    { name: "Avg. Click Rate", stat: "₦0.00" },
];
  


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Branch() {


  return (
    <AppLayout>
      <main className="">
        <div className="relative isolate overflow-hidden pt-0">
          {/* Secondary navigation */}
          <header className="pb-4 pt-2 sm:pb-6">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-6 px-4 sm:flex-nowrap sm:px-6 lg:px-8">
              <h1 className="text-base/7 font-semibold text-gray-900">
                Cashflow
              </h1>
              <div className="order-last flex w-full gap-x-8 text-sm/6 font-semibold sm:order-none sm:w-auto sm:border-l sm:border-gray-200 sm:pl-6 sm:text-sm/7">
                {secondaryNavigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={
                      item.current ? "text-indigo-600" : "text-gray-700"
                    }
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              {/* <a
                href="#"
                className="ml-auto flex items-center gap-x-1 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <PlusSmallIcon aria-hidden="true" className="-ml-1.5 size-5" />
                New invoice
              </a> */}
            </div>
          </header>

          {/* Stats */}
          <div>
           
            <dl className="mx-auto grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.name}
                  className="m-1 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 rounded-lg bg-white px-4 py-7 shadow sm:px-4 xl:px-5"
                >
                  <dt className="text-sm/6 font-medium text-gray-500">
                    {stat.name}
                  </dt>
                  <dd
                    className={classNames(
                      stat.changeType === "negative"
                        ? "text-rose-600"
                        : "text-gray-700",
                      "text-xs font-medium",
                    )}
                  >
                    {stat.change}
                  </dd>
                  <dd className="w-full flex-none text-3xl/10 font-medium tracking-tight text-gray-900">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <dl className="mt-5 grid grid-cols-1 gap-0 sm:grid-cols-3">
              {stats2.map((item) => (
                <div
                  key={item.name}
                  className="mx-1 overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
                >
                  <dt className="truncate text-sm font-medium text-gray-500">
                    {item.name}
                  </dt>
                  <dd className="mt-1 text-3xl/10 font-medium tracking-tight text-gray-900">
                    {item.stat}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        
      </main>
    </AppLayout>
  );
}
