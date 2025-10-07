export const getEnv = (ASTRO_GLOBAL: any) => {
  const AstoEnv = ASTRO_GLOBAL?.locals?.runtime?.env;

  return {
    SECRET_VAR_ONE: AstoEnv?.SECRET_VAR_ONE || import.meta.env.SECRET_VAR_ONE,
  };
};
