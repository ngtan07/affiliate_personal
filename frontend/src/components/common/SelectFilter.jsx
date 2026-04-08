import { ChevronDown } from "lucide-react";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";

const SelectFilter = ({ itemSelected, setItemSelected, items, minW = 'min-w-28' }) => {
    return (
        <div className={`relative shrink-0 ${minW}`}>
            <Listbox value={itemSelected} onChange={setItemSelected}>

                <ListboxButton className="group appearance-none text-left pl-3 pr-9 py-1.5 bg-transparent border border-outline/30 rounded-full text-sm font-medium text-on-surface outline-none transition-all cursor-pointer w-full hover:bg-surface-variant/50 block data-[open]:border-primary data-[open]:ring-1 data-[open]:ring-primary data-[open]:ring-inset">
                    <span className="block truncate">{itemSelected.name || itemSelected.platformName || itemSelected.formatName}</span>
                    <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none transition-transform duration-300 group-data-[open]:rotate-180" />
                </ListboxButton>

                <ListboxOptions
                    anchor="bottom"
                    transition
                    className="w-[var(--button-width)] z-50 mt-1 rounded-2xl border border-outline/30 bg-surface p-1 shadow-lg outline-none transition duration-150 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
                >
                    {items.map(i => (
                        <ListboxOption
                            key={i.id || i.platformId || i.formatId}
                            value={i}
                            className="cursor-pointer select-none rounded-xl px-4 py-2 text-sm text-on-surface transition-colors data-[focus]:bg-surface-variant/50"
                        >
                            <span className="block truncate">{i.name || i.platformName || i.formatName}</span>
                        </ListboxOption>
                    ))}
                </ListboxOptions>

            </Listbox>
        </div>
    )
}

export default SelectFilter
