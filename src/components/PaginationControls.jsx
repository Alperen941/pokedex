function PaginationControls({ page, onPrevious, onNext }) {
  return (
    <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '10px' }}>
      <button onClick={onPrevious} disabled={page === 0}>
        Previous
      </button>
      <span>Page {page + 1}</span>
      <button onClick={onNext}>
        Next
      </button>
    </div>
  );
}

export default PaginationControls;
