import * as React from 'react';
import { useState } from 'react';
import categories from '../../dataUtils/categories';
import { DataGroups } from '../../dataUtils/DataTypes';
import { FilterDict } from '../../hooks/useFilter';

const PickerContext = React.createContext<{
  PickerMainRef: React.RefObject<HTMLElement>;
  filterState: [FilterState, React.Dispatch<React.SetStateAction<FilterState>>];
  searchTerm: [string, React.Dispatch<React.SetStateAction<string>>];
  activeCategoryState: [
    ActiveCategoryState,
    React.Dispatch<React.SetStateAction<ActiveCategoryState>>
  ];
}>({
  PickerMainRef: React.createRef(),
  filterState: [{}, () => {}],
  searchTerm: ['', () => {}],
  activeCategoryState: [null, () => {}]
});

type Props = Readonly<{
  children: React.ReactNode;
  PickerMainRef: React.RefObject<HTMLElement>;
}>;

export function PickerContextProvider({ children, PickerMainRef }: Props) {
  const filterState = useState<FilterState>(null);
  const searchTerm = useState<string>('');
  const activeCategoryState = useState<ActiveCategoryState>(categories[0]);

  return (
    <PickerContext.Provider
      value={{
        PickerMainRef,
        filterState,
        searchTerm,
        activeCategoryState
      }}
    >
      {children}
    </PickerContext.Provider>
  );
}

export function usePickerMainRef() {
  const { PickerMainRef } = React.useContext(PickerContext);
  return PickerMainRef;
}

export function useFilterState() {
  const { filterState } = React.useContext(PickerContext);
  return filterState;
}

export function useSearchTermState() {
  const { searchTerm } = React.useContext(PickerContext);
  return searchTerm;
}

export function useActiveCategoryState(): [
  ActiveCategoryState,
  (nextActive: DataGroups) => void
] {
  const { activeCategoryState, PickerMainRef } = React.useContext(
    PickerContext
  );

  const [activeCategory, setActiveCategory] = activeCategoryState;
  return [activeCategory, setCategory];

  function setCategory(category: DataGroups) {
    setActiveCategory(category);
    PickerMainRef.current
      ?.querySelector(`[data-name="${category}"]`)
      ?.scrollIntoView();
  }
}

type FilterState = null | Record<string, FilterDict>;

type ActiveCategoryState = null | DataGroups;
