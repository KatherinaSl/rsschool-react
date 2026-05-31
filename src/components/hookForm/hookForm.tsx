import { useForm } from 'react-hook-form';
import './hookForm.css';
import type { FormInputInterface } from '../../interfaces/interface';
import { useDispatch } from 'react-redux';
import { save } from '../../store/slice';

export default function HookFormComponent() {
  const { register, handleSubmit } = useForm<FormInputInterface>();
  const dispatch = useDispatch();
  const onSubmit = (data: FormInputInterface) => {
    dispatch(save(data));
  };

  return (
    <div className="container">
      <form className="from" onSubmit={handleSubmit(onSubmit)}>
        <h3>Controlled from</h3>
        <div className="group">
          <label htmlFor="name">Name</label>
          <input type="text" {...register('name')} />
        </div>

        <div className="group">
          <label htmlFor="age">Age</label>
          <input type="number" {...register('age')} />
        </div>

        <div className="group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="email@example.com"
            {...register('email')}
          />
        </div>

        <div className="group">
          <label>Gender</label>
          <div className="radio-group">
            <label>
              <input type="radio" value="male" {...register('gender')} />
              Male
            </label>

            <label>
              <input type="radio" value="female" {...register('gender')} />
              Female
            </label>
          </div>
        </div>

        <label className="checkbox-group">
          <input type="checkbox" {...register('terms')} />I agree to Terms &
          Conditions
        </label>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}
