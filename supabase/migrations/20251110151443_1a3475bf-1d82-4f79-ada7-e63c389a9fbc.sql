-- Fix function search_path security issue
DROP FUNCTION IF EXISTS public.clean_old_visitor_sessions();

CREATE OR REPLACE FUNCTION public.clean_old_visitor_sessions()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $function$
BEGIN
  DELETE FROM public.visitor_sessions
  WHERE last_seen < NOW() - INTERVAL '5 minutes';
END;
$function$;