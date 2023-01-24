import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/Hooks";
import { getBeers } from "../../actions/BeerActions";
import BeersListView from "./BeersListView";
import { BeerPagination } from "../UI";
import SearchBeers from "./SearchBeer";


const Beers = () => {
  const dispatch = useAppDispatch();
  const { beers } = useAppSelector((state) => state.beers);
  const [activePage, setActivePage] = useState(1);
  const per_page = 15;



  const searchBeers = (options:{beer_name?:string;abvOption?:string; abvValue?:string}) => {
      if(options.beer_name) {
          const { beer_name } = options;
          dispatch(getBeers({beer_name,page:activePage, per_page}))
      } else if(options.abvOption){
          const { abvValue, abvOption} = options;
          const abvObj = {
              [abvOption]:abvValue
          };

          dispatch(getBeers({...abvObj,page:activePage, per_page,}))
      }

  }
  useEffect(() => {
    dispatch(getBeers({ page: activePage, per_page }));
  }, [activePage, per_page]);

  return (
    <>
      <h1>Beer List</h1>
      <SearchBeers
        filterBeers={(params: {beer_name?:string;abvOption?:string; abvValue?:string}) => searchBeers(params)}
      />
      <BeersListView />
      <BeerPagination
        items={beers}
        current={activePage}
        getActivePage={(page: number) => setActivePage(page)}
      />
    </>
  );
};

export default Beers;
