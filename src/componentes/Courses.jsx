
import courses from '../../courses'

export const Courses = () => {
  const getColorClass = (index) => {
    const colors = ['card1','card2','card3','card4','card5','card6','card7'];
    return colors[index % colors.length];
  };
 
  return (
    <>
     
    <h1 className='courses-title'>Courses</h1>
    <div className='courses-container'>
      {courses.map((course, index) => (
        <div  className={`courses-card ${getColorClass(index)}`} key={course.id}>
          <h1 className='courses-name'>{course.name}</h1>
          <img src={course.img} className='courses-img' alt={course.name} />
          
          <p className='courses-nivel'>{course.nivel}</p>
        </div>
      ))}
    </div>
    </>
  );
}
