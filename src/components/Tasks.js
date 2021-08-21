import Task from './Task';

function Tasks(allItems) {

    const dateToday = (today) =>{
        const sample = new Date(today).toLocaleString('en-US', { timeZone: "Asia/Hong_Kong" });
        return sample;
    }
    return (
        <>
           {
              allItems.allItems.map((item) =>(
                <Task 
                key={item._id} 
                id={item._id}
                title={item.title}
                description={item.description} 
                date={dateToday(item.date)}
                />
           )) 
           }
        </>
    )
}

export default Tasks
