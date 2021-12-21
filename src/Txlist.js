export default function TxList({ txs }) {
    if (txs.length === 0) return null;
  
    return (
      <>
        {txs.map((item) => (
          <div key={item} className="alert alert-info mt-5">
            <div className="flex-1">
              <label className="text-titlu">{item.hash}</label>
            </div>
            <h1 className="text-titlu">Congrats on your new acquisition!</h1>

          </div>
        ))}
      </>
    );
  }
  