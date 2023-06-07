export default function VisibilityControl({ setShowCompleted, clearTasks }) {
    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete it?')) {
            clearTasks()
        }
    }
  
    return (
        <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
            <div className="form-check form-switch">
                <input type="checkbox" onChange={e => setShowCompleted(e.target.checked)} className="form-check-input" />{' '}
                <label>Show Tasks Done</label>
            </div>
  
            <button onClick={handleDelete} className="btn btn-danger btn-sm">Clear</button>
        </div>
    )
}