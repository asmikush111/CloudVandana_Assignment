import java.io.*;

class Answer3 {

	public static boolean checkPangram(String s)
	{
		boolean[] mark = new boolean[26];

		int ind = 0;
		for (int i = 0; i < s.length(); i++)
		{
		    if ('a' <= s.charAt(i) )
                { ind = s.charAt(i) - 'a'; }
			else if ('A' <= s.charAt(i) )
				{ ind = s.charAt(i) - 'A'; }
			else continue; 
			mark[ind] = true;
		}

		for (int i = 0; i < 26; i++)
		{
		    if (mark[i] == false)return false; 
		}

		return true;
	}

	public static void main(String[] args)
	{
		String s = "The quick brown fox jumps over the lazy dog";

		if (checkPangram(s))
			System.out.print("It is a pangram.");
		else
			System.out.print("It is not a pangram.");
	}
}
