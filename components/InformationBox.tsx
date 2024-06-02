import {
  LightBulbIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

import cn from "@lib/cn";

export default function InformationBox({ type, children }) {
  let iconStyle = "h-5 w-5 inline-block mr-2 -mt-1";
  let BoxIcon;

  if (type === "error" || type === "warning") {
    BoxIcon = <ExclamationTriangleIcon className={iconStyle} />;
  } else {
    BoxIcon = <LightBulbIcon className={iconStyle} />;
  }

  return (
    <div
      className={cn(
        "mt-6 border px-4 py-3 rounded-lg",
        type === "info"
          ? "bg-blue-300/20 dark:bg-blue-900/20 border-blue-300 dark:border-blue-900"
          : "",
        type === "warning"
          ? "bg-yellow-300/20 dark:bg-yellow-300/10 border-yellow-300 dark:border-yellow-700"
          : ""
      )}
      role="alert"
    >
      <div className="font-bold mb-4">
        {BoxIcon}
        Good to know
      </div>
      <span className="block sm:inline">{children}</span>
    </div>
  );
}
