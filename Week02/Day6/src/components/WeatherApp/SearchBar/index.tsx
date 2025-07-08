import styles from "./SearchBar.module.css";

type Props = {
  city: string;
  setCity: (val: string) => void;
};

const SearchBar = ({ city, setCity }: Props) => {
  return (
    <input
      type="text"
      value={city}
      onChange={(e) => setCity(e.target.value)}
      placeholder="Hanoi"
      className={styles.input}
    />
  );
};

export default SearchBar;
