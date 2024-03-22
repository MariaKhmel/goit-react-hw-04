import css from "./LoadMoreBtn.module.css";

function LoadMoreBtn({ onLoadMore, disabled }) {
  return (
    <button
      onClick={onLoadMore}
      disabled={disabled}
      type="click"
      className={css.loadMoreBtn}
    >
      Load More
    </button>
  );
}

export default LoadMoreBtn;
