import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/20/solid";
import {
  CursorArrowRaysIcon,
  EnvelopeOpenIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import AppLayout from "../../components/layout/AppLayout";

const stats = [
  {
    name: "Customers",
    value: "405,091.00",
    change: "+4.75%",
    changeType: "positive",
  },
  {
    name: "Balance",
    value: "$1,120,000.00",
    change: "+54.02%",
    changeType: "negative",
  },
  {
    name: "Deposits",
    value: "$245,988.00",
    change: "-1.39%",
    changeType: "positive",
  },
  {
    name: "Withdrawals",
    value: "$30,156.00",
    change: "+10.18%",
    changeType: "negative",
  },
];

const stats2 = [
  { name: "Loans", stat: "71,897" },
  { name: "Expenditure", stat: "$35,000" },
  { name: "Avg. Click Rate", stat: "24.57%" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dashboard() {
  return (
    <AppLayout>
      <div>
      <h3 className="text-base font-semibold text-gray-900">Last 30 days</h3>
        <dl className="mx-auto  grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.name}
              className="m-1 flex shadow flex-wrap items-baseline justify-between gap-x-4 gap-y-2 rounded-lg bg-white px-4 py-7 sm:px-4 xl:px-5"
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
          <div key={item.name} className="overflow-hidden rounded-lg mx-1 bg-white px-4 py-5 shadow sm:p-6">
            <dt className="truncate text-sm font-medium text-gray-500">{item.name}</dt>
            <dd className="mt-1 text-3xl/10 font-medium tracking-tight text-gray-900">{item.stat}</dd>
          </div>
        ))}
      </dl>
    </div>
    </AppLayout>
  );
}
