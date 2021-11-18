import React from "react";
import "twin.macro";

import Link from "./link";
import Md from "./markdownDynamic";

function CellButton({ button, item }) {
  const link = item[button.key];
  const icon = button.icon || item[button.iconRef];
  if (!link) {
    return null;
  }
  return (
    <Link button to={link} icon={icon} key={button.key}>
      {button.name}
    </Link>
  );
}

export default function GenericCells({ items, buttonItems = [], cells }) {
  return (
    <div tw="bg-white shadow sm:rounded-md divide-y divide-gray-200">
      {items.map((item) => {
        const { key, link, name, description } = item;
        return (
          <div tw="p-4" key={key}>
            <div tw="flex">
              <h3 tw="!mt-2 flex-auto">
                <Link to={link} showExternal>
                  {name}
                </Link>
              </h3>
              <div>
                {buttonItems.map((button) => (
                  <CellButton key={button.key} button={button} item={item} />
                ))}
              </div>
            </div>
            <Md>{description}</Md>
          </div>
        );
      })}
    </div>
  );
}
